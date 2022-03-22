import { Code } from './Code';
import { Heart } from './Heart';
import { IconProps } from './IconProps';

// https://www.svgrepo.com/
export const icons: Record<string, (props: IconProps) => JSX.Element> = {
  code: Code,
  heart: Heart,
};
