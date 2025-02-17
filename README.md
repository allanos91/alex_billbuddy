# BillBuddy

 BillBuddy is a clone of SplitWise, the popular bill splitting app. BillBuddy was made with Python and React.js.

### Screenshots

Signup Page
![Screenshot (97)](https://github.com/user-attachments/assets/973ef311-c90f-4bc6-bb38-e3fee7432165)

Dashboard
![Screenshot (98)](https://github.com/user-attachments/assets/508acb51-0b7a-4267-ab51-f893ac008bb0)

Recent Activity
![Screenshot (99)](https://github.com/user-attachments/assets/bc2d8b11-9455-4bd5-b9a0-4385bcd43758)

All Expenses
![Screenshot (100)](https://github.com/user-attachments/assets/4ae0b5ae-6721-4bca-9af1-614dd7406140)

## Technical Details
BillBuddy users can split bills with other users they are friends with evenly. 

if (difference < .03 && difference !== 0) {
            let bigNum = (parseFloat(amountArr[amountArr.length-1].amount) * 100) + (difference * 100)
            let smallNum = (bigNum / 100).toString()
            amountArr[amountArr.length-1].amount = smallNum
        }


Features
- Add/ delete / pay expenses
- Assign and split expenses with friends
- Add and remove friends from your network.

Technologies Used
- React.js
- Flux
- PostgresSQL
- Flask
- Python
