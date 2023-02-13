# Flitter
This a Twitter clone, [KeepCoding-Glovo Women in Tech](https://keepcoding.io/nuestros-bootcamps/mujeres-glovo/ "KC Bootcamp") final project 

### General Remarks
* MVP 
* Project created with MEVN tech stack (MongoDB, ExpressJS, Vue 3, NodeJS) + Typescript
* Twitter clone for desktop devices 

### Epics and functional requirements 

#### Public Browsing 
_for anonymous users / logged out users_
1. **User registration:** As an anonymous user from the public area, I want to be able to register in the system in order to authenticate myself and be able to perform functions as a member of the platform indicating my username, e-mail address and access password.
2. Password recovery: As an anonymous user I want to be able to recover my password in case I forget it so that I can log in again in the private area.
3. **User login:** As an anonymous user I want to be able to login to the platform to access the private area and thus be able to access all its functionalities.
4. **View public list of latest publications:** As an anonymous user I want to be able to access a list of latest publications by the members of the platform when accessing the main page of the domain in order to access the latest content quickly.
5. **Search (and find) publications:** As an anonymous user I want to be able to search for posts using a search engine in order to quickly find posts that deal with what I am interested in at a given time.
6. **View a member's posts:** As an anonymous user I want to be able to access a list of the latest posts of a specific member of the platform when I access their profile url.
7. **View older or more recent posts:** As an anonymous user I want to access older or more recent posts from the different post listings (main, search results and member's posts) so I can browse through all the posts in the listing I am using.

#### Private Browsing
_for authorised, registered users_
1. **User deactivation:** As a member of the platform, I want to be able to log out of my account from the private area to stop being a member of the platform.
2. **User logout:** As a member of the platform, I want to be able to log out of my platform to prevent an unauthorized user from using my account from a computer without my authorization.
3. **Create a publication:** As a member of the platform I want to be able to create through an easy to use form where I can fill in all the fields that make up a publication.
4. **Delete a publication:** As a member of the platform I want to be able to delete a publication in order to remove content that I no longer wish to have published.
5. **Follow a platform member:** As a member of the platform I want to follow other members of the platform so that I can customize the contents that appear in the personalized list of latest publications.
6. **Stop following a platform member:** As a member of the platform I want to stop following members of the platform that I am following in order to stop displaying their content in the customized list of latest posts.
7. **View customized list of latest posts:** As a platform member I want the list of latest posts to consist of content published only by the users I am following.
8. **Award Kudos to the author of a publication:** As a member of the platform I want to be able to reward the author of a publication by awarding "a kudos" to his/her publication.
9. **Remove Kudos to the author of a publication:** As a member of the platform I want to be able to remove the kudos I had previously awarded to a publication.

## Getting Started:
** Please ensure you are also setup on the [backend](https://github.com/criSiles/Flitter-BackEnd "backend") for this project**
- git clone the [repository](https://github.com/LuciaSaenz/front-final-project.git "repo"), then:

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```
This will start a development server on http://localhost:8080. The application will automatically reload if you make changes to the code.

#### Compiles and minifies for production
```
npm run build
```

### Website Usage
In order to use the website, you need to sign up and create a user. You'll then be directed to the login page. Once logged in, you'll have access to: 
- Your private feed with:
  - The ability to follow / unfollow a user
  - The ability to give kudos on fleets
  - The ability to create and delete your own fleets 
  - The ability to log out or deactivate your account
