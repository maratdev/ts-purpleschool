class UserStrategy {
  githubToken: string;
  jwtToken: string;
}

interface IAuthStrategy {
  auth(user: UserStrategy): boolean
}

class AuthStrategy {
  constructor(
    private strategy: IAuthStrategy
  ) {
  }

  setStrategy(strategy: IAuthStrategy) {
    this.strategy = strategy
  }

  public authUser(user: UserStrategy): boolean {
    return this.strategy.auth(user)
  }
}

class JWTStrategy implements IAuthStrategy {
  auth(user: UserStrategy): boolean {
    return !!user.jwtToken;

  }
}


class GitHubStrategy implements IAuthStrategy {
  auth(user: UserStrategy): boolean {
    return !!user.githubToken;

  }
}

const userStrategy = new UserStrategy();
userStrategy.jwtToken = 'token';
const authStrategy = new AuthStrategy(new JWTStrategy())

console.log(authStrategy.authUser(userStrategy))
authStrategy.setStrategy(new GitHubStrategy())
console.log(authStrategy.authUser(userStrategy))
