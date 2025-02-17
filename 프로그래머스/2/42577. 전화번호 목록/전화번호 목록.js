function solution(phone_book) {
  const sortedPhoneBook = phone_book.sort();

  for (let i = 0; i < sortedPhoneBook.length; i++) {
    if (i === sortedPhoneBook.length - 1) break;

    if (sortedPhoneBook[i + 1].startsWith(sortedPhoneBook[i])) return false;
  }

  return true;
}