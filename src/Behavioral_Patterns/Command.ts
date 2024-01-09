class UserCommand {
  constructor(
    public userId: number
  ) {
  }
}

class CommandHistory {
  public commands: Command[] = [];

  push(command: Command) {
    this.commands.push(command)
  }

  remove(command: Command) {
    this.commands = this.commands.filter(c => c.commandId !== command.commandId)
  }
}

abstract class Command {
  public commandId: number;

  abstract execute(): void;

  constructor(public history: CommandHistory) {
    this.commandId = Math.random()
  }
}

class AddUserCommand extends Command {
  constructor(
    private user: UserCommand,
    private receiver: UserComService,
    history: CommandHistory
  ) {
    super(history);
  }

  execute(): void {
    this.receiver.saveUser(this.user)
    this.history.push(this)
  }

  undo() {
    this.receiver.deleteUser(this.user.userId);
    this.history.remove(this);
  }
}

class UserComService {
  saveUser(user: UserCommand) {
    console.log(`Сохраняю пользователя с id ${user.userId}`)
  }

  deleteUser(userId: number) {
    console.log(`Удаляю. пользователя с id ${userId}`)
  }
}

class CommandController {
  reveiver: UserComService;
  history: CommandHistory = new CommandHistory();

  addReceiver(receiver: UserComService) {
    this.reveiver = receiver;
  }

  run() {
    const addUserCommand = new AddUserCommand(
      new UserCommand(1),
      this.reveiver,
      this.history
    );
    addUserCommand.execute();
    console.log(addUserCommand.history);
    addUserCommand.undo();
    console.log(addUserCommand.history);
  }
}

const controller2 = new CommandController();
controller2.addReceiver(new UserComService())
controller2.run()

