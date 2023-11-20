package com.example.demo.VaccinationCenter.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.VaccinationCenter.entity.VaccinationCenter;
import com.example.demo.VaccinationCenter.repository.VaccinCenterRepo;

@Service
public class VaccinCenterService {
    
    @Autowired
    private VaccinCenterRepo centerRepository;

    public List<VaccinationCenter> findAllByCity(String city){
        return centerRepository.findAllByCityLike(city);
    }
    public VaccinationCenter findById(int id){
        return centerRepository.findById(id).get();
    }

    public List<VaccinationCenter> findAll(){
        return centerRepository.findAll();
    }
    
    public VaccinationCenter SaveVaccinCenter(VaccinationCenter Center){
        return centerRepository.save(Center);
    }

    public VaccinationCenter findByUtilisateursLogin(String login){
        return centerRepository.findByUtilisateursLogin(login);
    }

    public void deleteCenterById(Integer id) {
        java.util.Optional<VaccinationCenter> center = centerRepository.findById(id);

        if(center.isPresent()) centerRepository.deleteById(id);
        else System.out.println("le centre est pas présent");
    }

    public VaccinationCenter updateCenter(int id, VaccinationCenter updatedCenter){

        Optional<VaccinationCenter> center1 = centerRepository.findById(id);
        
        if (center1.isPresent()){
            updatedCenter.setId(center1.get().getId());
            return centerRepository.save(updatedCenter);
        }
        else {
            System.out.println("le center est pas présent");
            return null;
        } 
        

    }


}
