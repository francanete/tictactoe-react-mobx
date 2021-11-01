# tillit - Tic Tac Toe

On this project, 2 players can interact with the classic game Tic Tac Toe. Players can choose the size of the board, 9 squares or 25 squares for the adventurers.

In either case, the game will automatically find the winner and prompt it on the screen.

After the game is over, players will have the option to replay and choose between a 9 or 25 square board.

### Starting the game: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Future improvements

There are a few features that I will recommend implementing in the future:

### Set random turn

At the moment, the application defaults to player "X" to open the game. I would recommend implementing a function that takes a random number, then conditionally assign "X" if the number is odd or "O" if the number is even.

### Global count

It would be beneficial for the user experience to be able to count how many games each player has won.

### Track movements

Another implementation would be a "move-tracker" so that at all times the players can check the situation of the board at any time.
