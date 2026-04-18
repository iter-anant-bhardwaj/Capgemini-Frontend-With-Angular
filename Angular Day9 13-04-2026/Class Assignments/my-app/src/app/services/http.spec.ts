import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Http as Httpservice} from './http'
import { ProductType } from '../types/productType';

describe('Httpservice', () => {
  let service: Httpservice;

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  let testHttp: HttpTestingController;

  let expectedProducts: ProductType[] = [
    {
      id: 1,
      title: 'prod 1',
      image: 'some address',
      price:100
    },
    {
      id: 2,
      title: 'prod 1',
      image: 'some address',
      price:200
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[Httpservice, provideHttpClientTesting()]
    });
    service = TestBed.inject(Httpservice);
    testHttp = TestBed.inject(HttpTestingController)
  });

  afterEach(()=>{
    testHttp.verify()
  })

  it('should get products from api',()=>{
    service.getProduct().subscribe({
      next:(data)=>{
        expect(data).toEqual(expectedProducts)
        expect(data.length).toBe(2)
      }
    })
    const req = testHttp.expectOne('https://api.escuelajs.co/api/v1/products');
    expect(req.request.method).toBe('GET');

    req.flush(expectedProducts); 
  });
});
