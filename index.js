const { thread, allMessages } = require('./data_test.js');

function task1(
  countLikes,
  countDislikes,
  countEditedMessages,
  totalMessagesCount
) {
  function calculateReputation(
    countLikes,
    countDislikes,
    countEditedMessages,
    totalMessagesCount
  ) {
    let reputation = 0;
    let ratio = 1;
    if (!totalMessagesCount) {
      return reputation;
    }
    if (countDislikes < countLikes) {
      ratio = (totalMessagesCount - countEditedMessages) / totalMessagesCount;
    }

    reputation = ratio * (countLikes - countDislikes);
    return reputation;
  }
  return calculateReputation(
    countLikes,
    countDislikes,
    countEditedMessages,
    totalMessagesCount
  );
}

function task2(thread, countMessagesToPrint) {
  function printMessages(thread, countMessagesToPrint) {
    let messagesToPrint = [];
    for (let index = 0; index < thread.messages.length; ++index) {
      if (index >= countMessagesToPrint) {
        break;
      }
      messagesToPrint.push(thread.messages[thread.messages.length - index - 1]);
    }
    if (!messagesToPrint.length) {
      console.log('Ошибка формата! В теме нет сообщений');
    } else {
      for (let index = 0; index < messagesToPrint.length; ++index) {
        console.log(
          messagesToPrint[index].author.name +
            ' (репутация: ' +
            messagesToPrint[index].author.reputation +
            '): ' +
            messagesToPrint[index].text
        );
      }
    }
  }

  printMessages(thread, countMessagesToPrint);
}

function task3(messages) {
  let countEditedMessages = 0;
  let countNoEditedMessages = 0;
  for (let index = 0; index < messages.length; ++index) {
    messages[index].edited ? ++countEditedMessages : ++countNoEditedMessages;
  }
  return [messages.length, countEditedMessages, countNoEditedMessages];
}

console.log(task1(3, 1, 10, 20));
console.log(task2(thread, 5));
console.log(task3(allMessages));
