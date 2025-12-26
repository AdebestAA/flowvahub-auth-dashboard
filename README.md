## Flowwvahub Auth Integration and Reward Dashboard Design

## FEATURES
Signup/Signin usign email and password
User Profil creation After sign
Custom Users Table that includes username column for display and personalization
Form Validation Using Zod
Protected Dashboard Route
Supabase Session Persistence Redirect
Error adn Loading State Management
Rewards Dashboard Design

## SIGN UP FLOW
User signs up with email,username and password
form inputs get validated using zod
data get submitted to supabase for authentication
the user gets added to the users table immediately after the successful authentication with supabase
user is redirected to signin page

## SIGN IN FLOW
users enter his/her email and password
zod validates it
data get sent to supabase for authentication
user gets redirected to the dashboard page 


## TECH STACK
## Frontend
React Js(Vite) 
Typescript -Type safety
Tailwind CSS - Styling
React Router - client side routing
Zod - Form Validation and Schema

## Backend/Database
Supabase - auth and database

## State Management
Context API
Zustand

## GENERAL Flow
On visit, user lands on signup/sigin page
after successful authentication user routes to dashboard
unauthenicated users cant access dashboard





