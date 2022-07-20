import { INamedObject } from "./named-object.interface";

/**
 * The Game interface
 * @extends INamedObject
 * @todo Might need to support multiple genres in the future
 */
export interface IGame extends INamedObject {

    /**
     * The Platform Id the game belongs to
     */
    platformId: number;

    /**
     * The Genre Id the game is associated with
     */
    genreId: number;

    /**
     * The Developers Id the game is associated with
     */
    developerId: number;

    /**
     * The game overview/description
     */
    overview: string;

    /**
     * The url for the game's thumbnail
     */
    thumbnailUrl?: string;

    /**
     * The Optional Youtube video URL for a trailer/gameplay video of the given game
     */
    youtubeUrl?: string;

    /**
     * The game's release date
     */
    releaseDate?: Date;

    /**
     * The maximum number of players the game supports
     */
    players?: number;

    /**
     * The slug aka Friendly URL string
     */
    slug: string;
}
