class Form {
  constructor(public name: string) {}
}

abstract class FormSaver<T> {
  public save = (form: Form) => {
    const result = this.transform(form);
    this.logger(result);
    this.send(result);
  };

  protected abstract transform(form: Form): T;
  protected abstract send(data: T): void;
  protected logger = (data: T) => {
    console.log('FormSaver сохранил', JSON.stringify(data));
  };
}

class Backend extends FormSaver<string> {
  protected transform = (form: Form): string => {
    return `User: ${form.name}`;
  };

  protected send = (data: string) => {
    console.log(`Отправляю ${data} на сервер`);
  };
}

class ExternalService extends FormSaver<{ name: string }> {
  protected transform = (form: Form): { name: string } => {
    return { name: form.name };
  };

  protected send = (data: { name: string }) => {
    console.log(`Отправляю ${data.name} на сторонний сервер`);
  };
}

const myBackend = new Backend();
myBackend.save({ name: 'Иван' }); // FormSaver сохранил "User: Иван"
// Отправляю User: Иван на сервер

const externalService = new ExternalService(); // FormSaver сохранил {"name":"Иван"}
externalService.save({ name: 'Иван' });
// Отправляю Иван на сторонний сервер



