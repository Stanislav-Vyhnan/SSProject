import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Posters = db.define(
  'posters',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    genres: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.REAL,
    },
    graphics: {
      type: DataTypes.REAL,
    },
    description: {
      type: DataTypes.TEXT,
    },
    releaseDate: {
      type: DataTypes.STRING,
    },
    nameImg: {
      type: DataTypes.STRING,
    },
    linkTrailerYT: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Posters;
