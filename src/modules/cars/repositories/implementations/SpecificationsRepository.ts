import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository, ICreateSpecificationDTO } from '../ISpecificationRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
  findByName(name: string): Specification {
    const specifications = this.specifications.find((specification) => specification.name === name);
    return specifications;
  }
}

export { SpecificationsRepository };
