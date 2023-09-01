import { Request, Response } from "express";
import { attachCookiesToResponse, createJWT } from "../../utils/jwt";
import { LoginAdminUseCase } from "../../useCases/Admin/AuthUseCase";
import { CreateStudentDTO } from "../../dtos/Student/CreateStudent";
import { UpdateStudentDTO } from "../../dtos/Student/UpdateStudent";
import { StudentRepository } from "../../repositories/Student";
import { AdminRepository } from "../../repositories/Admin";
import { AdminDocument } from "../../models/Admin";
import bcrypt from "bcrypt";
import { NotFoundError, UnauthorizedError } from "../../errors";

class AuthController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const adminRepository = new AdminRepository();
        const loginUseCase = new LoginAdminUseCase(adminRepository);

        const Admin = await loginUseCase.execute(email);

        if (!Admin) {
            throw new UnauthorizedError("Invalid credentials");
        }
        interface AdminPayload {
            name: string;
            _id: string;
            isAdmin: boolean;
        }

        const isPasswordValid = await Admin.comparePassword(password);

        if (!isPasswordValid) {
            throw new UnauthorizedError("Invalid credentials");
        }

        const AdminPayload: AdminPayload = {
            name: Admin!.name,
            _id: Admin!._id,
            isAdmin: Admin!.isAdmin,
        };

        const token = createJWT(AdminPayload);

        attachCookiesToResponse(res, AdminPayload);

        res.status(200).json({
            message: "Login successful",
            AdminPayload,
            token,
        });
    }
}

export { AuthController };
