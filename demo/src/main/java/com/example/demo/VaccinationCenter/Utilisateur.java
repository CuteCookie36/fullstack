package com.example.demo.VaccinationCenter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class Utilisateur {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    /////////////////////////////
    @Column(name="name")
    private String name;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    /////////////////////////////
    @Column(name="adress")
    private String adress;

    public String getAdress() {
        return adress;
    }
    public void setAdress(String adress) {
        this.adress = adress;
    }
    /////////////////////////////
    @Column(name="mdp")
    private String mdp;

    public String getMdp() {
        return mdp;
    }
    public void setMdp(String mdp) {
        this.mdp = mdp;
    }
    
}
