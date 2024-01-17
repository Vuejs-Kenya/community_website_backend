import { Event } from "./events.entity"
import { Post } from "./posts.entity";
import { User } from "./user.entity";
import { Video } from "./videos.entity";

const entities = [Event, User, Post, Video];

export { Event, Post, User, Video };
export default entities;