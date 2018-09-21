const asserts = require('assert');
const mongoose = require('mongoose');

const UserModel = require('../src/user');
const BlogPostModel = require('../src/blogPost');
const CommentModel = require('../src/comment');

describe('Collection association', () => {
    let joe, blogPost, comment;

    it('should collection association work', (done)=>{
        joe = new UserModel({firstName:'jai'});
        blogPost = new BlogPostModel({title:'Java script', content:'this is just testing'});
        comment = new CommentModel({content:'welcome to comment section'});

        joe.blogPosts.push(blogPost);
        blogPost.comments.push(comment);
        comment.user = joe;

        /*user.save();
        blogPost.save();
        comment.save();*/

        Promise.all([joe.save(), blogPost.save(), comment.save()])
            .then(()=> done())

    });

    xit('save relation between a user and a blogpost', (done)=>{
        UserModel.findOne({firstName:'jai'})
        .populate('blogPosts')
        .then((result)=>{
            console.log(result);
            done();
        })
    });

    it('save a full relation graph', (done)=>{
        UserModel.findOne({firstName:'jai'})
            .populate({
                path:'blogPosts',
                populate:{
                    path:'comments',
                    model:'comment',
                    populate:{
                        path:'user',
                        model:'user'
                    }
                }
            })
            .then((user)=>{
                console.log(user.blogPosts[0].comments[0]);
                done();
            })
    });    
})
