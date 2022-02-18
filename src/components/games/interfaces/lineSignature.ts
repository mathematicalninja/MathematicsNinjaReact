export interface lineSignature {
  vertical: 1 | -1 | 0;
  horizontal: 1 | 0;
}

export const vertLine: lineSignature = {
  vertical: 1,
  horizontal: 0,
};

export const horizLine: lineSignature = {
  vertical: 0,
  horizontal: 1,
};

export const downDiag: lineSignature = {
  vertical: 1,
  horizontal: 1,
};

export const upDiag: lineSignature = {
  vertical: -1,
  horizontal: 1,
};
