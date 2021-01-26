import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'

@Entity('products')
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'product_name'})
    public productName: string

    @Column({ name: 'stock'})
    public stock: string
}