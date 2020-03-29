import { notification } from 'antd';

export const notify = (title, description) => {
  notification.warn({
    message: title,
    description: description,
    top: 120,
  });
};
