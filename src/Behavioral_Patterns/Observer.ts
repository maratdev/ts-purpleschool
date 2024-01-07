interface IObserver  {
  update(subject: ISubject): void;
}

interface ISubject {
  subscribe(observer: IObserver): void;
  unSubscribe(observer: IObserver): void;
  notify(data: { name: string }): void;
}

class Bank implements ISubject {
  public observers: IObserver[] = [];

  subscribe = (observer: IObserver): void => {
    if (this.observers.includes(observer)) {
      console.log('Вы уже наблюдаете за этим объектом');
      return;
    }

    this.observers.push(observer);
  };

  unSubscribe = (observer: IObserver): void => {
    const index = this.observers.indexOf(observer);

    if (index === -1) {
      console.log('Вы уже отписаны');
      return;
    }

    this.observers.splice(index, 1);
  };

  notify = (): void => {
    for (const observer of this.observers) {
      observer.update(this);
    }
  };
}

class PopupElement implements IObserver {
  update = (subject: ISubject) => {
    // отрисовываем данные, которые мы получили
    console.log('PopupElement получил данные', subject);
    console.log(subject);
  };
}

class Store implements IObserver {
  update = (subject: ISubject) => {
    // отрисовываем данные, которые мы получили
    console.log('Store получил данные', subject);
    console.log(subject);
  };
}

// --- Использование:

const bankSubject = new Bank();

const store = new Store();
const popup = new PopupElement();


bankSubject.unSubscribe(store); // Вы уже отписаны
bankSubject.subscribe(store);
bankSubject.subscribe(popup);
bankSubject.subscribe(popup); // Вы уже наблюдаете за этим объектом


bankSubject.notify();
bankSubject.notify();

