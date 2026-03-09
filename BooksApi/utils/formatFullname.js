module.exports = (fullName) => {
  if (typeof fullName !== 'string') return 'Error';
  const name = fullName.split(' ');
  if (!name) return 'Error';
  if (name.length !== 2) return 'Error';
  const [firstName, lastName] = name;
  return (
    firstName[0].toUpperCase() +
    firstName.slice(1).toLowerCase() +
    ' ' +
    lastName[0].toUpperCase() +
    lastName.slice(1).toLowerCase()
  );
};
