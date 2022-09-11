import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Credit {
  @PrimaryGeneratedColumn() id: number;

  @Column() accountNumber: string;
  @Column({ unique: true }) reference: string;
  @Column() narration: string;
  @Column() dateTime: string;
  @Column() amount: string;
  @Column() transactionType: string;
  @Column() accountBalance: string;
}
