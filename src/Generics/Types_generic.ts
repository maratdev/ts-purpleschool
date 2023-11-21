//типизация типов

interface ILogLine<T> {
  timeStamp: Date,
  data: T,
}

type LogLineType<T> = {
  timeStamp: Date,
  data: T,
}

const LogLine: ILogLine<{a: number}> = {
  timeStamp: new Date(),
  data: {
    a: 1
  }
}
