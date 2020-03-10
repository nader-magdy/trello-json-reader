
# trello-json-reader

Read Trello board exported json to git more details and summary about lists &amp; cards.

Put your board json in /boards directory

  

## Installion

Clone the repo.

Create new directory `boards` and

copy your exported board json file `{Board_Json_File}.json` into the `board` folder.

  

## Usage

Then run the application with the following commands

- For first time run `npm install`

- Run `node index.js --board={Board_JsonFile_File}`

### Arguments
| Argument   | default  | Description  |
| --------   |:--------:|:---------|
| board 	 |  ---     |The board file name  |
| showCards  | false    | If true it will show the card details |

  

## Multiple boards

To run the code for multiple boards:

- Run `node index.js --board={Board_JsonFile_File_1} --board={Board_JsonFile_File_2}`