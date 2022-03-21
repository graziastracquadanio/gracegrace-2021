import { makeAutoObservable, runInAction } from 'mobx';

import type { RootStore } from './RootStore';
import { TagService } from 'services/TagService';
import type { Tag } from 'types/tag';
import { printError } from 'utils/others';

export class TagsStore {
  tags: Tag[] | null = null;

  private uiStore;
  private tagService;

  constructor({ db, uiStore }: RootStore) {
    makeAutoObservable(this);
    this.tagService = new TagService(db);
    this.uiStore = uiStore;
  }

  init = () => {
    this.fetchTags();
  };

  private fetchTags = async () => {
    this.uiStore.loading = true;
    let data: Tag[] = [];
    try {
      data = await this.tagService.getAll();
    } catch (error) {
      printError(error);
      runInAction(() => {
        this.uiStore.addFailNotification('Something went wrong fetching the data');
      });
    } finally {
      runInAction(() => {
        this.tags = data;
        this.uiStore.loading = false;
      });
    }
  };

  addTag = async (data: Tag): Promise<string | null> => {
    this.uiStore.loading = true;
    try {
      await this.tagService.add(data);
      runInAction(() => {
        this.tags = [...(this.tags || []), data];
      });
    } catch (error) {
      printError(error);
      runInAction(() => {
        this.uiStore.addFailNotification('Something went wrong saving the data');
      });
    } finally {
      runInAction(() => {
        this.uiStore.loading = false;
      });
    }
    return Promise.resolve(data.id);
  };

  getTags(ids: string[]): Tag[] | null | undefined {
    return ids ? this.tags?.filter((tag) => ids.includes(tag.id)) : this.tags;
  }
}
