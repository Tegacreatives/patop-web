export function calculateDaysLeft(targetDate: string | number | Date) {
  const targetDateTime = new Date(targetDate).getTime();
  const currentDateTime = new Date().getTime();
  const timeDifference = targetDateTime - currentDateTime;
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}
