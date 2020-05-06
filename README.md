## users テーブル

|Column|Type|Options|
|:--------:|:-------:|:-----------:|
|Name|string|null :false|
|Email|string|unique :true|
|Password|integer|unique :true|
|Password_confirmation|integer|null :false|
|message_id|integer||

### Association
- has_many:messages
- has_many:users_group
- has_many:groups, through: :user_group


## groupテーブル

|Column|Type|Options|
|:--------:|:-------:|:-----------:|
|group_name|string|null :false|

### Association
- has_many:user_group
- has_many:user, through: :user_group
- has_many:messages


## user_groupテーブル

|Column|Type|Options|
|:--------:|:-------:|:-----------:|
|user_id|integer|null:false, foregin_key :true|
|group_id|integer|null:false, foregin_key :true|

### Association
- belong_to :user
- belong_to :group

## messagesテーブル
|Column|Type|Options|
|:--------:|:-------:|:-----------:|
|text|text|null :false|
|user_id|integer|null:false, foregin_key :true|
|group_id|integer|null:false, foregin_key :true|
|image|string||

### Association
- belong_to: user
- belong_to: group

