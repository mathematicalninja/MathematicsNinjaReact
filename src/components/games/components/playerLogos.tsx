export type logo = JSX.Element | string;

interface logoTypes {
  [key: string]: logo[];
}

const playerLogos: logoTypes = {
  emoji: ["💜", "🦇", "☕"],
};

export default playerLogos;
