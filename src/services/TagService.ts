import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';

import type { Tag } from 'types/tag';

export class TagService {
  private db;

  constructor(db: Firestore) {
    this.db = db;
  }

  getAll = async (): Promise<Tag[]> => {
    const querySnap = await getDocs(collection(this.db, 'tags'));
    const data = querySnap.docs.map((docSnap) => docSnap.data() as Tag);
    return Promise.resolve(data);
  };

  get = async (id: string): Promise<Tag | null> => {
    let data = null;
    const snap = await getDoc(doc(this.db, 'tags', id));
    if (snap.exists()) {
      data = snap.data() as Tag;
    }
    return Promise.resolve(data);
  };

  add = async (data: Tag): Promise<string | null> => {
    await setDoc(doc(this.db, 'tags', data.id), data);
    return Promise.resolve(data.id);
  };
}
