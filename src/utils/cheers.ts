const cheers = [
  'Bonjour',
  'Hola',
  'Privet',
  'Nǐn hǎo',
  'Ciao',
  'Hallo',
  'Olá',
  'Asalaam alaikum',
  'Anyoung haseyo',
  'Halløj',
  'Hujambo',
  'Hoi',
  'Yassou',
  'Cześć',
  'Halo',
  'Namaste',
  'Selam',
  'Hey',
  'Tjena',
  'Hei',
];

export const giveMeARandomCheer = (): string => {
  return cheers[Math.floor(Math.random() * cheers.length)];
};
