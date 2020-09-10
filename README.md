# TODO App using Nodejs Express Framework and Mongoose.
APIs exposed:
	1. /add - POST API to add tasks.
	2. /list - GET API to view active tasks.

Documents are expired automatically from mongodb using the index feature that runs every 1 min to clean up the expired records. This is controlled using an additional field expireAt which is set to creationTime + duration.
