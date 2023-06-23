import { IGame } from "./game.interface";
import { INamedObject } from "./named-object.interface";

/**
 * The List interface
 * Holds data related to a list of games created by a  user.
 * @extends INamedObject
 */
export interface IList extends INamedObject {

    /**
     * The name of the user who created the list
     */
    username: string;

    /**
     * The list of games which the list contains
     */
    gameIds: string[];

    /**
     * The slug used in the url
     */
    slug: string;

    /**
     * The number of likes/favorites the list currently has
     */
    likes: number;

}

export interface IListWithGames extends IList {
  games: IGame[];
}
