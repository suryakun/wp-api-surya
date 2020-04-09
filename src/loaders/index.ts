import express from 'express'
import expressLoader from './express';
import swaggerLoader from './swagger';

const server = (app : express.Application) : void => {
    expressLoader(app);
    swaggerLoader(app)
}

export default server
