export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  export function getUserInitials(fullName) {
    if (!fullName || typeof fullName !== 'string') {
      return '';
    }
  
   
    const nameParts = fullName.trim().split(' ');
  
   
    const initials = nameParts
      .filter(part => part)
      .map(part => part[0].toUpperCase()) // Get the first letter in uppercase
      .join('');
  
    return initials;
  }