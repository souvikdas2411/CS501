## CS501 - Fall 2023

This is the CS501 Research Credit Fall 2023 repository lead by Prof. Will Braynen. 

## Folders

- **sprint1** 
	- _Supabase implementaions(localhost)_ 
		- `GET /users`<details><summary>Description</summary>></details>
		- `GET /trips`<details><summary>Description</summary>></details>
		- `GET /user/:id`<details><summary>Description</summary>></details>
		- `GET user/:id/travel-buddies`<details><summary>Description</summary>></details>

- **sprint2** 
	- _mongoDB implementaions(localhost)_
		- `GET /users`<details><summary>Description</summary>></details> 
		- `GET /trips`<details><summary>Description</summary>></details>
		- `GET /user/:id`<details><summary>Description</summary>></details>
		- `GET user/:id/travel-buddies`<details><summary>Description</summary>></details>
		- `POST /createUser`<details><summary>Description</summary>></details> 
		- `POST /createTrip`<details><summary>Description</summary>></details>
	
	- _dynamoDB implementaions(localhost)_
		- `GET /users`<details><summary>Description</summary>></details> 
		- `GET /trips`<details><summary>Description</summary>></details>
		- `GET /user/:id`<details><summary>Description</summary>></details>
		- `GET user/:id/travel-buddies`<details><summary>Description</summary>></details>
		- `POST /createUser`<details><summary>Description</summary>></details> 
		- `POST /createTrip`<details><summary>Description</summary>></details>
		- `POST /createRelation`<details><summary>Description</summary>></details>

## Schemas

- _Supabase implementaions(localhost)_

	- `GET /users`
	```json
	[
	  {
	    "id": "52d5d3de-9e54-4847-a56d-540f1a30e4e6",
	    "name": "Souvik Das",
	    "email": "dassou@oregonstate.edu"
	  },
	  {
	    "id": "f1b14023-6fed-4f75-800f-f16231420c4b",
	    "name": "Sahana N H",
	    "email": "sahananh@gmail.com"
	  }
	]
	```
	- `GET /trips`
	```json
	[
	  {
	    "id": "2100e8ef-07a4-4935-9c65-d8ddc4d25aa2",
	    "name": "City of Joy",
	    "destination": "Kolkata",
	    "start date": "2023-10-25",
	    "end date": "2023-10-31"
	  }
	]
	```
	- `GET /user/:id`
	```json
	{
	  "id": "f1b14023-6fed-4f75-800f-f16231420c4b",
	  "name": "Sahana N H",
	  "email": "sahananh@gmail.com"
	}
	```
	- `GET user/:id/travel-buddies`
	```json
	[
	  {
	    "user_id": "52d5d3de-9e54-4847-a56d-540f1a30e4e6"
	  },
	  {
	    "user_id": "f1b14023-6fed-4f75-800f-f16231420c4b"
	  }
	]
	```