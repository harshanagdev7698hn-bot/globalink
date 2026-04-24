// apps/api/src/auth/auth.service.ts
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.userModel.findOne({ email: dto.email });
    if (existing) {
      throw new BadRequestException('Email already registered');
    }

    const hashed = await bcrypt.hash(dto.password, 10);

    const user = await this.userModel.create({
      name: dto.name,         // ya fullName, jo bhi tumne DTO me rakha hai
      email: dto.email,
      country: dto.country,
      role: dto.role,
      password: hashed,
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      country: user.country,
      role: user.role,
    };
  }
}
