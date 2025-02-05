import express from 'express';

const entries = [
  { id: 1, date: '2023-01-01', owner: 'Alice', text: 'Went to the park.', tags: ['outdoor', 'fun'] },
  { id: 2, date: '2023-01-02', owner: 'Bob', text: 'Read a book.', tags: ['reading', 'relaxing'] },
  { id: 3, date: '2023-01-03', owner: 'Charlie', text: 'Had a great workout.', tags: ['fitness', 'health'] },
  { id: 4, date: '2023-01-04', owner: 'Alice', text: 'Cooked a new recipe.', tags: ['cooking', 'food'] },
  { id: 5, date: '2023-01-05', owner: 'Bob', text: 'Watched a movie.', tags: ['entertainment', 'relaxing'] },
  { id: 6, date: '2023-01-06', owner: 'Charlie', text: 'Went hiking.', tags: ['outdoor', 'adventure'] },
  { id: 7, date: '2023-01-07', owner: 'Alice', text: 'Visited a museum.', tags: ['culture', 'learning'] },
  { id: 8, date: '2023-01-08', owner: 'Bob', text: 'Played video games.', tags: ['gaming', 'fun'] },
  { id: 9, date: '2023-01-09', owner: 'Charlie', text: 'Attended a concert.', tags: ['music', 'entertainment'] },
  { id: 10, date: '2023-01-10', owner: 'Alice', text: 'Went to the beach.', tags: ['outdoor', 'relaxing'] }
];
const router = express.Router();

router.get('/', (req, res) => {
console.log("GET /entries");
  res.status(200).json({ entries: entries });
});

export default router;
