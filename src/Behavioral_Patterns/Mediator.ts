interface IMediator {
  notify(sender: string, event: string): void
}

abstract class Mediated {
  mediator: IMediator;

  setMediator(mediator: IMediator) {
    this.mediator = mediator
  }

}


class Notifications {
  send() {
    console.log('Отправляю уведомление')
  }
}

class Log {
  log(message: string) {
    console.log(message)
  }
}

class EventHandler extends Mediated {
  myEvent() {
    this.mediator.notify('EventHandler', 'myEvent');
  }
}

class NotificationMediator implements IMediator {
  constructor(
    public notifications: Notifications,
    public logger: Log,
    public handler: EventHandler
  ) {
  }

  notify(_: string, event: string) {
    switch (event) {
      case 'myEvent':
        this.notifications.send();
        this.logger.log('Отправлено');
        break;
    }
  }
}

const handler = new EventHandler();
const loggers = new Log();
const notifications = new Notifications();

const m = new NotificationMediator(
  notifications,
  loggers,
  handler
);
handler.setMediator(m)
handler.myEvent()
