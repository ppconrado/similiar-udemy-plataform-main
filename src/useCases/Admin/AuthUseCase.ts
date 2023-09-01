import { AdminRepository } from "../../repositories/Admin"; // Importe o repositório correto para administradores
import { CreateAdminDTO } from "../../dtos/Admin/CreateAdmin";
import { AdminDocument } from "../../models/Admin";
import bcrypt from "bcrypt";
import { UnauthorizedError } from "../../errors";

class CreateAdminUseCase {
    private adminRepository: AdminRepository;

    constructor(adminRepository: AdminRepository) {
        this.adminRepository = adminRepository;
    }

    async execute(data: CreateAdminDTO): Promise<AdminDocument> {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;

        return await this.adminRepository.create(data);
    }
}

class LoginAdminUseCase {
    private adminRepository: AdminRepository;

    constructor(adminRepository: AdminRepository) {
        this.adminRepository = adminRepository;
    }

    async execute(email: string): Promise<AdminDocument | null> {
        return await this.adminRepository.findByEmail(email);
    }
}

class UpdateAdminUseCase {
    private adminRepository: AdminRepository;

    constructor(adminRepository: AdminRepository) {
        this.adminRepository = adminRepository;
    }

    async execute(
        adminId: string,
        data: Partial<CreateAdminDTO>,
        requesterId: string
    ): Promise<AdminDocument | null> {
        if (adminId !== requesterId) {
            throw new UnauthorizedError("Unauthorized");
        }

        return await this.adminRepository.update(adminId, data);
    }
}

export {
    CreateAdminUseCase,
    LoginAdminUseCase,
    UpdateAdminUseCase /*  AdminUseCase */,
};
