const path = require('path')
const fs = require('fs')
const database = require('../../database')

exports.getAll = async () => {
	// return await Post.find({})
}

exports.createPost = async data => {
	// const created = await Post.create(data)

	// console.log(created)
	// return created
}

exports.removePost = async id => {
	// const deleted = await Post.findByIdAndDelete(id)
	// fs.unlink(path.resolve(__dirname, `../../public/uploads/${deleted.image}`), err => {
	// 	if (err) throw new Error('DELETE_POST_ERROR: DELETE_FILE_ERROR')
	// })

	// console.log(deleted)
	// return deleted
}

exports.editPost = async (id, { image, caption, date }) => {
	// const post = await Post.findById(id, 'image')
	// if (!post) throw new Error('DELETE_POST_ERROR: POST_NOT_EXIST')

	// if (image) {
	// 	fs.unlink(path.resolve(__dirname, `../../public/uploads/${post.image}`), err => {
	// 		if (err) throw new Error('DELETE_POST_ERROR: DELETE_PREV_FILE_ERROR')
	// 	})
	// 	post.image = image
	// }
	// post.caption = caption
	// post.date = date
	// await post.save()
	// console.log(post)
	// return post
}