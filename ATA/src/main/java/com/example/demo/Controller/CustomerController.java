package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Bean.ReservationBean;
import com.example.demo.Bean.RouteBean;
import com.example.demo.Bean.VehicleBean;
import com.example.demo.Service.CustomerService;


@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/customer")
public class CustomerController {
@Autowired
private CustomerService cuserv;
@PostMapping("/bookVehicle")
public String meth1(@RequestBody ReservationBean rb)
{
	cuserv.bookVehicle(rb);
	return "Booked Successfully";
}
@GetMapping("/booking/{id}")
public ReservationBean meth2(@PathVariable(value = "id") int reservationID)
{
	return cuserv.viewResevationById(reservationID);
	
}
@GetMapping("/vehicle/{type}")
public  List<VehicleBean> meth3(@PathVariable(value = "type") String type)
{
	return cuserv.viewVehicleByType(type);
	
}
@GetMapping("/vehicleCapacity/{seatingcapacity}")
public  List<VehicleBean> meth4(@PathVariable(value = "seatingcapacity") String seatingapacity)
{
	return cuserv.viewVehicleBySeatingCapacity(seatingapacity);
	
}
@GetMapping("/print/{id}")
public ReservationBean meth5(@PathVariable(value = "id") int reservationID)
{
	return cuserv.viewResevationById(reservationID);
	
}
@GetMapping("/viewRoute")
public List<RouteBean> meth6()
{
	
	return cuserv.viewRoute();
}

}
