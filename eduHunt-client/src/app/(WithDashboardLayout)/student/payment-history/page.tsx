import PaymentHistoryOfStudent from "@/components/modules/Payment/PaymentHistoryOfStudent";
import { getPaymentHistoryOfStudent } from "@/services/Payment";

const PaymentHistoryPage = async () => {
  const { data: paymentData } = await getPaymentHistoryOfStudent();
  return (
    <div>
      <PaymentHistoryOfStudent paymentData={paymentData} />
    </div>
  );
};

export default PaymentHistoryPage;
