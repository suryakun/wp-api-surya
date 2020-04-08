import express from 'express'
import expressLoader from './express';

const server = (app : express.Application) : void => {
    expressLoader(app);
}

export default server
