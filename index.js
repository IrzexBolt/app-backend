require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001

const git_data = {
    "login": "IrzexBolt",
    "id": 52386456,
    "node_id": "MDQ6VXNlcjUyMzg2NDU2",
    "avatar_url": "https://avatars.githubusercontent.com/u/52386456?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/IrzexBolt",
    "html_url": "https://github.com/IrzexBolt",
    "followers_url": "https://api.github.com/users/IrzexBolt/followers",
    "following_url": "https://api.github.com/users/IrzexBolt/following{/other_user}",
    "gists_url": "https://api.github.com/users/IrzexBolt/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/IrzexBolt/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/IrzexBolt/subscriptions",
    "organizations_url": "https://api.github.com/users/IrzexBolt/orgs",
    "repos_url": "https://api.github.com/users/IrzexBolt/repos",
    "events_url": "https://api.github.com/users/IrzexBolt/events{/privacy}",
    "received_events_url": "https://api.github.com/users/IrzexBolt/received_events",
    "type": "User",
    "site_admin": false,
    "name": "IrzexBolt",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2019-06-30T21:48:08Z",
    "updated_at": "2024-01-27T22:09:58Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send("Hello Irteza")
} )

app.get('/youtube', (req,res) => {
    res.send("Seekh Gaye ho")
})

app.get('/login', (req,res) => {
    res.send('<h1>PLEASE LOGIN AT AZORP CLOUD</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/github', (req,res) => {
    res.json(git_data)
})