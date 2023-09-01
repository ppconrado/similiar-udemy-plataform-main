import { Request, Response } from "express";
import { attachCookiesToResponse, createJWT } from "../../utils/jwt";
import {
  UpdateUseCase,
  DeleteUseCase,
} from "../../useCases/Instructor/AuthUseCase";
import { CreateInstructorDTO } from "../../dtos/Instructor/CreateInstructor";
import { UpdateInstructorDTO } from "../../dtos/Instructor/UpdateInstructor";
import { InstructorRepository } from "../../repositories/Instructor";
import bcrypt from "bcrypt";

class InstructorController {
  async showAll(req: Request, res: Response) {
    const userId = req.params.id;
    const { name, email, password, specialty } = req.body;
    const requesterId = userId;

    const instructorRepository = new InstructorRepository();

    const allInstructors = await instructorRepository.findAll();

    if (!allInstructors) {
      return res.status(404).json({
        error: "Empty",
      });
    }

    res.status(200).json({
      Instructors: allInstructors,
    });
  }

  async findOne(req: Request, res: Response) {
    const id = req.params.id;

    const instructorRepository = new InstructorRepository();

    const instructor = await instructorRepository.findById(id);

    if (!instructor) {
      return res.status(404).json({
        error: "User Not Found",
      });
    }

    res.status(200).json({
      instructor,
    });
  }

  async update(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const { name, email, password, specialty } = req.body;
      const requesterId = userId;

      const instructorRepository = new InstructorRepository();
      const updateUserUseCase = new UpdateUseCase(instructorRepository);

      const hashedPassword = await bcrypt.hash(password, 10);

      const updateData: UpdateInstructorDTO = {
        name,
        email,
        password: hashedPassword,
        specialty,
      };

      const updatedUser = await updateUserUseCase.execute(
        userId,
        updateData,
        requesterId
      );

      if (!updatedUser) {
        return res.status(404).json({
          error: "User not found",
        });
      }

      res.status(200).json({
        message: "User updated successfully",
        user: updatedUser,
      });
    } catch (error) {
      res.status(500).json({
        error: `An error occurred while updating the user: ${error}`,
      });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const requesterId = userId;

      const instructorRepository = new InstructorRepository();
      const deleteUseCase = new DeleteUseCase(instructorRepository);

      await deleteUseCase.execute(userId, requesterId);

      res.status(200).json({
        message: "User deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        error: `An error occurred while deleting the user: ${error}`,
      });
    }
  }
}

export { InstructorController };
