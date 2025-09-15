// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CrossBorderPayment {
    struct Payment {
        address sender;
        address receiver;
        uint256 amount;
        string currency;
        string destinationCountry;
        uint256 timestamp;
        bool completed;
    }

    mapping(uint256 => Payment) public payments;
    uint256 public paymentCounter;
    
    event PaymentSent(
        uint256 indexed paymentId,
        address indexed sender,
        address indexed receiver,
        uint256 amount,
        string currency,
        string destinationCountry
    );
    
    event PaymentCompleted(uint256 indexed paymentId);

    function sendPayment(
        address _receiver,
        string memory _currency,
        string memory _destinationCountry
    ) external payable returns (uint256) {
        require(msg.value > 0, "Payment amount must be greater than 0");
        require(_receiver != address(0), "Invalid receiver address");
        
        uint256 paymentId = paymentCounter++;
        
        payments[paymentId] = Payment({
            sender: msg.sender,
            receiver: _receiver,
            amount: msg.value,
            currency: _currency,
            destinationCountry: _destinationCountry,
            timestamp: block.timestamp,
            completed: false
        });
        
        emit PaymentSent(paymentId, msg.sender, _receiver, msg.value, _currency, _destinationCountry);
        
        return paymentId;
    }
    
    function completePayment(uint256 _paymentId) external {
        Payment storage payment = payments[_paymentId];
        require(payment.receiver == msg.sender, "Only receiver can complete payment");
        require(!payment.completed, "Payment already completed");
        
        payment.completed = true;
        payable(payment.receiver).transfer(payment.amount);
        
        emit PaymentCompleted(_paymentId);
    }
    
    function getPayment(uint256 _paymentId) external view returns (Payment memory) {
        return payments[_paymentId];
    }
}