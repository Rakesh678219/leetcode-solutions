/**
 * @format
 * @param {string[]} emails
 * @return {number}
 */

const convertEmail = (email) => {
  let localName = email.split("@")[0] ?? "";
  const domainName = email.split("@")[1];

  let isForwardable = false;

  if (localName.includes("+")) {
    localName = localName.split("+")?.[0];
  }

  if (localName.includes(".") || domainName.includes(".")) {
    isForwardable = true;
    localName = localName.replace(/\./g, "");
  }

  if (isForwardable) {
    return localName + "@" + domainName;
  } else {
    return "";
  }
};
var numUniqueEmails = (emails) => {
  let uniqueEmails = new Set();
  emails.forEach((email) => {
    const convertedEmail = convertEmail(email);
    if (convertedEmail !== "") {
      uniqueEmails.add(convertedEmail);
    }
  });
  return uniqueEmails.size;
};

numUniqueEmails([
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
]);
