## users テーブル

|Column|Type|Options|
|:--------:|:-------:|:-----------:|
|name|string|null :false|
|email|string|unique :true|
|password|integer|unique :true|
|password_confirmation|integer|null :false|

### Association
- has_many:messages
- has_many:user_groups
- has_many:groups, through: :user_groups


## groupsテーブル

|Column|Type|Options|
|:--------:|:-------:|:-----------:|
|name|string|null :false|

### Association
- has_many:user_groups
- has_many:users, through: :user_groups
- has_many:messages


## user_groupsテーブル

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
|text|text||
|user_id|integer|null:false, foregin_key :true|
|group_id|integer|null:false, foregin_key :true|
|image|string||

### Association
- belong_to: user
- belong_to: group

