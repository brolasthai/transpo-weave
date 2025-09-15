// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MerchantPayment {
    address public merchant;
    uint256 public totalPaymentsReceived;
    
    event PaymentReceived(
        address indexed payer,
        address indexed merchant,
        uint256 amount,
        uint256 timestamp
    );
    
    event MerchantUpdated(
        address indexed oldMerchant,
        address indexed newMerchant
    );
    
    modifier onlyMerchant() {
        require(msg.sender == merchant, "Only merchant can call this function");
        _;
    }
    
    constructor(address _merchant) {
        require(_merchant != address(0), "Invalid merchant address");
        merchant = _merchant;
    }
    
    // Accept ETH payments and transfer to merchant
    function payMerchant() external payable {
        require(msg.value > 0, "Payment amount must be greater than 0");
        require(merchant != address(0), "Merchant address not set");
        
        totalPaymentsReceived += msg.value;
        
        // Transfer ETH to merchant immediately
        (bool success, ) = payable(merchant).call{value: msg.value}("");
        require(success, "Transfer to merchant failed");
        
        emit PaymentReceived(msg.sender, merchant, msg.value, block.timestamp);
    }
    
    // Fallback function to accept ETH payments
    receive() external payable {
        require(msg.value > 0, "Payment amount must be greater than 0");
        require(merchant != address(0), "Merchant address not set");
        
        totalPaymentsReceived += msg.value;
        
        // Transfer ETH to merchant immediately
        (bool success, ) = payable(merchant).call{value: msg.value}("");
        require(success, "Transfer to merchant failed");
        
        emit PaymentReceived(msg.sender, merchant, msg.value, block.timestamp);
    }
    
    // Update merchant address (only current merchant can call)
    function updateMerchant(address _newMerchant) external onlyMerchant {
        require(_newMerchant != address(0), "Invalid merchant address");
        require(_newMerchant != merchant, "New merchant must be different");
        
        address oldMerchant = merchant;
        merchant = _newMerchant;
        
        emit MerchantUpdated(oldMerchant, _newMerchant);
    }
    
    // Get contract balance (should be 0 as payments are forwarded immediately)
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
    
    // Get total payments received
    function getTotalPayments() external view returns (uint256) {
        return totalPaymentsReceived;
    }
}