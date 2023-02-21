export const getFirstLetterFromName = (fullName: string) => {
  return fullName
    .split(' ')
    .map((word) => word[0])
    .join('');
};

export const showFirstFifteenCharecters = (text: string) => {
  if (text.length > 15) {
    return text.slice(0, 15) + '...';
  } else {
    return text;
  }
};

export const modalClose = (idName: string) => {
  const myModal = document.getElementById(idName);
  if (myModal) {
    myModal.click();
  }
};
