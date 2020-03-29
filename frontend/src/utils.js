import { notification } from 'antd';

export const notify = (title, description) => {
  notification.warn({
    message: title,
    description: description,
    top: 120,
  });
};



export const gradeToScore = (grade) => {
  const gradeMap = {
    'A': 4,
    'B' : 3,
    'C' : 2,
    'D' : 1,
    'F' : 0
  }
  return gradeMap[grade];
}

export const scoreToGrade = (score) => {
  if (score >= 4)
    return 'A+';
  else if (score >= 3.9)
    return 'A';
  else if (score > 3.7)
    return 'A-';
  else if (score >= 3.3)
    return 'B+';
  else if (score >= 2.7)
    return 'B-';
  else if (score >= 2.7)
    return 'B-';
  else if (score >= 2.3)
    return 'C+';
  else if (score >= 2.0)
    return 'C';
  else if (score >= 1.7)
    return 'C-';
  else if (score >= 1.0)
    return 'D';
  else
      return 'F';
}
