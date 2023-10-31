CREATE TABLE `users` (
    'user_id' VARCHAR(16) NOT NULL,
    'password' VARCHAR(16) NOT NULL,
    'nickname' VARCHAR(16) NOT NULL,
    'profile_photo_link' VARCHAR(50) NOT NULL,
    'profile_mes' VARCHAR(100) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `channels` (
    'channel_name' VARCHAR(16) NOT NULL,
    
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- chats / blocks table code here
CREATE TABLE `follows` (

) ENGINE=InnoDB DEFAULT CHARSET=utf8;